package cyou.ted2.gymtracker.backend.controllers;


import cyou.ted2.gymtracker.backend.models.IAmUser;
import cyou.ted2.gymtracker.backend.models.MyUserPrincipal;
import cyou.ted2.gymtracker.backend.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/iAm")
public class IAmController {

    private UserRepository userRepository;

    public IAmController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping()
    public ResponseEntity<?> getUser(){
        MyUserPrincipal principal = (MyUserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(new IAmUser(principal.getUser()));
    }


}

