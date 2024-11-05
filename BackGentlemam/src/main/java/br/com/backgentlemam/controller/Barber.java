package br.com.backgentlemam.controller;


import br.com.backgentlemam.entities.BarberBranch;
import br.com.backgentlemam.service.BarberShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/barber")
public class Barber {

    @Autowired
    private BarberShopService barberShopService;

    @GetMapping(value = "/barbearias/list")
    public ResponseEntity<List<BarberBranch>> getAllBarberBranches() {
        List<BarberBranch> barberShops = barberShopService.getAllBarberBranches();
        return ResponseEntity.ok(barberShops);
    }
}
