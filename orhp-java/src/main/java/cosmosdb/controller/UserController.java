package cosmosdb.controller;

import cosmosdb.entity.User;
import cosmosdb.service.UserService;

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
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody User user) {
        userService.saveUser(user);
    }

    @GetMapping(value = "/{id}")
    public Optional<User> get(@PathVariable String id) {
        return userService.findById(id);
    }

    @GetMapping(value = "")
    public List<User> getAll() {
        return userService.findAll();
    }

    // @DeleteMapping(value = "/{id}/category/{category}")
    // public void delete(@PathVariable String id, @PathVariable String category) {
    //     userService.delete(id, category);
    // }

}
