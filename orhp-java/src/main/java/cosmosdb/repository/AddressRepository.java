package cosmosdb.repository;

import cosmosdb.entity.Address;
import com.microsoft.azure.spring.data.cosmosdb.repository.CosmosRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressRepository extends CosmosRepository<Address, String> {
    Optional<Address> findById(String id);

    List<Address> findAll();

    void deleteById(String id);
    
    Address save(Address user);

}
