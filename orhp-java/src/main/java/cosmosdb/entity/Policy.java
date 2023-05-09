package cosmosdb.entity;

import com.microsoft.azure.spring.data.cosmosdb.core.mapping.Document;
import com.microsoft.azure.spring.data.cosmosdb.core.mapping.PartitionKey;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;

@Getter
@Setter
@Document(collection = "policy")
public class Policy {

    @PartitionKey
    private String id;
  
    private String monthly_premium;
  
    private String deductible;

    private ArrayList<String> addresses;

    private ArrayList<User> users;
}
