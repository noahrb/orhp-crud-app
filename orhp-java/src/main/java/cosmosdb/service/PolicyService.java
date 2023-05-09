package cosmosdb.service;

import com.azure.data.cosmos.PartitionKey;
import cosmosdb.entity.Policy;
import cosmosdb.repository.PolicyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class PolicyService {

    private PolicyRepository repository;

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
    }

    public void delete(String policyId) {
        repository.deleteById(policyId);
    }
}
