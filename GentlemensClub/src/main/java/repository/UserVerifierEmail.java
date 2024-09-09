package repository;

import entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserVerifierEmail extends JpaRepository<User,Long> {
}
