package br.com.backgentlemam.repository;

import br.com.backgentlemam.entities.BarberBranch;
import br.com.backgentlemam.entities.BarberShop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BarberShopRepository extends JpaRepository<BarberBranch, Long> {

    @Query("SELECT DISTINCT b FROM BarberBranch b")
    List<BarberBranch> findAlBarberShops();
}