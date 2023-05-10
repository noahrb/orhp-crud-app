package cosmosdb.entity;

import com.microsoft.azure.spring.data.cosmosdb.core.mapping.Document;
import com.microsoft.azure.spring.data.cosmosdb.core.mapping.PartitionKey;

import lombok.Getter;
import lombok.Setter;

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
