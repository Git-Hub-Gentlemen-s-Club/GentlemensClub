package br.com.backgentlemans.controller;


import br.com.backgentlemans.entities.EmployeeBarber;
import br.com.backgentlemans.entities.view.BarberBranch;
import br.com.backgentlemans.service.BarberShopService;
import br.com.backgentlemans.service.EmployeeBarberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/barber")
public class Barber {

    @Autowired
    private BarberShopService barberShopService;

    @Autowired
    private EmployeeBarberService employeeBarberService;

    @GetMapping(value = "/barbearias/list")
    public ResponseEntity<List<BarberBranch>> getAllBarberBranches() {
        List<BarberBranch> barberShops = barberShopService.getAllBarberBranches();
        return ResponseEntity.ok(barberShops);
    }

    // Endpoint para adicionar o barbeiro a uma filial
    @PostMapping(value = "/{employeeBarberId}/filial/{branchId}")
    public ResponseEntity<String> addNewBranch(@PathVariable Long employeeBarberId,@PathVariable Long branchId) {
        try {

            employeeBarberService.addBarberToBranch(employeeBarberId, branchId);
            return ResponseEntity.ok("Branch added successfully");
        }catch (Exception e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @PostMapping(value = "/{emplpyeeBarberId}/horarios")
    public ResponseEntity<String> addTimeBarber(@PathVariable Long emplpyeeBarberId, @RequestParam("time") String time) {

        try {
            LocalTime time1 = LocalTime.parse(time);
            employeeBarberService.addTimeToBarber(emplpyeeBarberId, time1);
            return ResponseEntity.ok("Horário adicionado ao barbeiro com sucesso");

        } catch (Exception e) {

            return ResponseEntity.status(400).body("Erro ao adicionar horário: " + e.getMessage());
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getEmployeeById(@PathVariable Long id) {
        try {

            EmployeeBarber employeeBarber = employeeBarberService.getEmployeeById(id);
            System.out.println("PEGO");
            return ResponseEntity.ok().body("Empregado Adicionado com sucesso");
        }catch (Exception e) {
           return ResponseEntity.status(404).body(e.getMessage());

        }
    }
}