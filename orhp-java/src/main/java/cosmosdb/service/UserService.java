package cosmosdb.service;

import com.azure.data.cosmos.PartitionKey;
import cosmosdb.entity.User;
import cosmosdb.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class UserService {

    private UserRepository repository;

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
    }

    public void delete(String userId) {
        repository.deleteById(userId);
    }
}
