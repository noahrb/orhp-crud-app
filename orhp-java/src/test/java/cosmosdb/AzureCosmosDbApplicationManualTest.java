package cosmosdb;

import com.azure.data.cosmos.PartitionKey;
import cosmosdb.entity.User;
import cosmosdb.repository.UserRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
public class AzureCosmosDbApplicationManualTest {

    @Autowired
    UserRepository userRepository;

    // @Test
    // public void givenProductIsCreated_whenCallFindById_thenProductIsFound() {

    //     User user = userRepository.findById("001", new PartitionKey("001"))
    //         .orElse(null);
    //     Assert.notNull(user, "Retrieved Product is Null");

    // }

}
