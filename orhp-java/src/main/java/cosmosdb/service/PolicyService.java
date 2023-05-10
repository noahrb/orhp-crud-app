package cosmosdb.service;

import cosmosdb.entity.Policy;
import cosmosdb.repository.PolicyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class PolicyService {

    private PolicyRepository repository;
    @Autowired
    private UserService userService;

    @Autowired
    public PolicyService(PolicyRepository repository) {
        this.repository = repository;
    }

    public Optional<Policy> findById(String productId) {
        return repository.findById(productId);
    }

    public List<Policy> findAll() {
        return repository.findAll();
    }

    public void savePolicy(Policy policy) {
        repository.save(policy);
        userService.addPolicyToUsers(policy.getUsers(), policy.getId());
    }

    public void delete(String policyId) {
        repository.deleteById(policyId);
        userService.removePolicyFromAllUsers(policyId);
    }

    public void addUserToPolicies(ArrayList<String> policyIds, String userId) {
        List<Policy> policies = findAll();
        for(Policy policy: policies) {
            if(policyIds.contains(policy.getId())) {
                ArrayList<String> users = policy.getUsers();
                users.add(userId);
                policy.setUsers(users);
                repository.save(policy);
            }
        }
    }

    public void removeUserFromAllPolicies(String userId) {
        List<Policy> policies = findAll();
        for(Policy policy: policies) {
            ArrayList<String> users = policy.getUsers();
            for(String user : users) {
                if(user.equals(userId)) {
                    users.remove(user);
                    break;
                }
            }
            policy.setUsers(users);
            repository.save(policy);
        }
    }

    public void removeUserFromPolicies(String userId, List<String> policyIds) {
        List<Policy> policies = findAll();
        for(Policy policy: policies) {
            if(policyIds.contains(policy.getId())) {
                ArrayList<String> users = policy.getUsers();
                for(String user : users) {
                    if(user.equals(userId)) {
                        users.remove(user);
                        break;
                    }
                }
                policy.setUsers(users);
                repository.save(policy);
            }
        }
    }

    public void updatePolicy(String id, Policy policy) {
        Optional<Policy> policyOptional = findById(id);
        System.out.println("******************* Updating policy: " + policyOptional.get());
        if(policyOptional.isPresent()) {
            ArrayList<String> userIdsToAdd = new ArrayList<>();
            ArrayList<String> userIdsToRemove = new ArrayList<>();

            Policy policyToUpdate = policyOptional.get();
            List<String> existingPolicyUsers = policyToUpdate.getUsers();
            System.out.println("******************* Existing policy users: " + existingPolicyUsers);
            for(String user : existingPolicyUsers) {
                if(!policy.getUsers().contains(user)) {
                    userIdsToRemove.add(user);
                    System.out.println("***************** User ids to remove: " + userIdsToRemove);
                    userService.removePolicyFromUsers(userIdsToRemove, id);
                }
            }

            List<String> newPolicyUsers = policy.getUsers();
            for(String userId : newPolicyUsers) {
                if(!existingPolicyUsers.contains(userId)) {
                    userIdsToAdd.add(userId);
                    System.out.println("******************* Adding user to policy: " + policyToUpdate.getId() + " user: " + userId);
                    userService.addPolicyToUsers(userIdsToAdd, id);
                }
            }

            policyToUpdate.setMonthly_premium(policy.getMonthly_premium());
            policyToUpdate.setDeductible(policy.getDeductible());
            policyToUpdate.setAddresses(policy.getAddresses());
            policyToUpdate.setUsers(policy.getUsers());
            repository.save(policyToUpdate);
        }
    }
}
