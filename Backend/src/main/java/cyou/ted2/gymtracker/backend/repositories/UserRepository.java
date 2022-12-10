package cyou.ted2.gymtracker.backend.repositories;

import cyou.ted2.gymtracker.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

    User findByUsername(String username);
}
