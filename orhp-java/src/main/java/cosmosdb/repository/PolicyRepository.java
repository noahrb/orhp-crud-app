package cosmosdb.repository;

import cosmosdb.entity.Policy;
import com.microsoft.azure.spring.data.cosmosdb.repository.CosmosRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PolicyRepository extends CosmosRepository<Policy, String> {
    Optional<Policy> findById(String id);

    List<Policy> findAll();

    void deleteById(String id);
    
    Policy save(Policy user);

}
