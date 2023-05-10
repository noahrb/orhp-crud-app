package cosmosdb.service;

import cosmosdb.entity.Address;
import cosmosdb.repository.AddressRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class AddressService {

    private AddressRepository repository;

    @Autowired
    public AddressService(AddressRepository repository) {
        this.repository = repository;
    }

    public Optional<Address> findById(String productId) {
        return repository.findById(productId);
    }

    public List<Address> findAll() {
        return repository.findAll();
    }

    public void saveAddress(Address address) {
        repository.save(address);
    }

    public void delete(String addressId) {
        repository.deleteById(addressId);
    }
}
