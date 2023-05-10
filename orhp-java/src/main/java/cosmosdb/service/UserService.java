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
        policyService.removeUserFromPolicies(userId);
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

    public void removePolicyFromUsers(String policyId) {
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
}
