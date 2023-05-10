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
        userService.removePolicyFromUsers(policyId);
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

    public void removeUserFromPolicies(String userId) {
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
}
