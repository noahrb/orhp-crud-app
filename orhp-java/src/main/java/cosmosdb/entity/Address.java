package cosmosdb.entity;

import com.microsoft.azure.spring.data.cosmosdb.core.mapping.Document;
import com.microsoft.azure.spring.data.cosmosdb.core.mapping.PartitionKey;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;

@Getter
@Setter
@Document(collection = "address")
public class Address {

    @PartitionKey
    private String id;
  
    private String street_name;
  
    private String zip_code;

    private String city;
    
    private String state;

}
