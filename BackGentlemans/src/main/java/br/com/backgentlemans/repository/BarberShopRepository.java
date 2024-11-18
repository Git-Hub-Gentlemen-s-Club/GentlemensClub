package br.com.backgentlemans.repository;

import br.com.backgentlemans.entities.view.BarberBranch;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BarberShopRepository extends JpaRepository<BarberBranch, Long> {

    @Query("SELECT DISTINCT b FROM BarberBranch b")
    List<BarberBranch> findAlBarberShops();
}