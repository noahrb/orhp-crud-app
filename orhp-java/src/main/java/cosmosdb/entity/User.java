package cosmosdb.entity;

import com.microsoft.azure.spring.data.cosmosdb.core.mapping.Document;
import com.microsoft.azure.spring.data.cosmosdb.core.mapping.PartitionKey;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Document(collection = "user")
public class User {

    @PartitionKey
    private String id;
  
    private String name;
  
    private String email;
    private String phone;
    private ArrayList<String> policies;
    private ArrayList<String> addresses;

}
