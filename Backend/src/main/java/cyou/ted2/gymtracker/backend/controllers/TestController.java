package cyou.ted2.gymtracker.backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/test")
    ResponseEntity<?> getRatingsOfFollowers(){
        return ResponseEntity.ok().body("Test Test Test");
    }

}
