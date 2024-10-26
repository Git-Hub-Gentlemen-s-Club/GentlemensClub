package repository;

import entities.BarberShop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BarberShopRepository extends JpaRepository<BarberShop, Long> {
}