package cosmosdb.repository;

import cosmosdb.entity.User;
import com.microsoft.azure.spring.data.cosmosdb.repository.CosmosRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CosmosRepository<User, String> {
    Optional<User> findById(String id);

    List<User> findAll();

    void deleteById(String id);
    
    User save(User user);

}
