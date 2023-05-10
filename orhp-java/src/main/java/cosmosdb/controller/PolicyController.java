package cosmosdb.controller;

import cosmosdb.entity.Policy;
import cosmosdb.service.PolicyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/policy")
public class PolicyController {

    private PolicyService policyService;

    @Autowired
    public PolicyController(PolicyService policyService) {
        this.policyService = policyService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody Policy policy) {
        policyService.savePolicy(policy);
    }

    @PostMapping(value = "/update/{id}")
    public void update(@PathVariable String id, @RequestBody Policy policy) {
        policyService.updatePolicy(id, policy);
    }
    
    @GetMapping(value = "/{id}")
    public Optional<Policy> get(@PathVariable String id) {
        return policyService.findById(id);
    }

    @GetMapping(value = "")
    public List<Policy> getAll() {
        return policyService.findAll();
    }

}
