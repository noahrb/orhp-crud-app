package cosmosdb.service;

import com.azure.data.cosmos.PartitionKey;
import cosmosdb.entity.User;
import cosmosdb.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class UserService {

    private UserRepository repository;
    @Autowired
    private PolicyService policyService;


    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public Optional<User> findById(String productId) {
        return repository.findById(productId);
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public void saveUser(User user) {
        repository.save(user);
        policyService.addUserToPolicies(user.getPolicies(), user.getId());
    }

    public void delete(String userId) {
        repository.deleteById(userId, new PartitionKey(userId));
        policyService.removeUserFromAllPolicies(userId);
    }


    public void addPolicyToUsers(ArrayList<String> userIds, String policyId) {
        List<User> users = findAll();
        for(User user: users) {
            if(userIds.contains(user.getId())) {
                ArrayList<String> policies = user.getPolicies();
                policies.add(policyId);
                user.setPolicies(policies);
                repository.save(user);
            }
        }
    }

    public void removePolicyFromAllUsers(String policyId) {
        List<User> users = findAll();
        for(User user: users) {
            ArrayList<String> policies = user.getPolicies();
            for(String policy : policies) {
                if(policy.equals(policyId)) {
                    policies.remove(policy);
                    break;
                }
            }
            user.setPolicies(policies);
            repository.save(user);
        }
    }

    public void removePolicyFromUsers(ArrayList<String> userIds, String policyId) {
        List<User> users = findAll();
        for(User user: users) {
            if(userIds.contains(user.getId())) {
                ArrayList<String> policies = user.getPolicies();
                for(String policy : policies) {
                    if(policy.equals(policyId)) {
                        policies.remove(policy);
                        break;
                    }
                }
                user.setPolicies(policies);
                repository.save(user);
            }
        }
    }

    public void updateUser(String id, User user) {
        Optional<User> userOptional = findById(id);
        if(userOptional.isPresent()) {
            ArrayList<String> policyIdsToAdd = new ArrayList<>();
            List<String> policyIdsToRemove = new ArrayList<>();

            User userToUpdate = userOptional.get();
            List<String> existingUserPolicies = userToUpdate.getPolicies();
            for(String policyId : existingUserPolicies) {
                if(!user.getPolicies().contains(policyId)) {
                    policyIdsToRemove.add(policyId);
                    policyService.removeUserFromPolicies(id, policyIdsToRemove);
                }
            }

            List<String> newUserPolicies = user.getPolicies();
            for(String policyId : newUserPolicies) {
                if(!existingUserPolicies.contains(policyId)) {
                    policyIdsToAdd.add(policyId);
                    policyService.addUserToPolicies(policyIdsToAdd, id);
                }
            }

            userToUpdate.setName(user.getName());
            userToUpdate.setEmail(user.getEmail());
            userToUpdate.setPhone(user.getPhone());
            userToUpdate.setAddresses(user.getAddresses());
            userToUpdate.setPolicies(user.getPolicies());
            repository.save(userToUpdate);
        }
    }
}
