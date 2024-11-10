package br.com.backgentlemam.service;

import br.com.backgentlemam.entities.Branches;
import br.com.backgentlemam.entities.EmployeeBarber;
import br.com.backgentlemam.entities.Time;
import br.com.backgentlemam.repository.BranchesRepository;
import br.com.backgentlemam.repository.EmployeeBarberRepository;
import br.com.backgentlemam.repository.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
public class EmployeeBarberService {

    @Autowired
    EmployeeBarberRepository employeeBarberRepository;

    @Autowired
    TimeRepository timeRepository;

    @Autowired
    BranchesRepository branchesRepository;

    public void addBarberToBranch(Long employeeBarberId, Long branchId){

        EmployeeBarber employeeBarber = employeeBarberRepository.findById(employeeBarberId)
                .orElseThrow(() -> new RuntimeException("Barbeiro não encontrado"));

        Branches branch = branchesRepository.findById(branchId)
                .orElseThrow(() -> new RuntimeException("Filial não encontrada"));

        employeeBarber.setBranch(branch);
        employeeBarberRepository.save(employeeBarber);
    }

    public void addTimeToBarber(Long employeeBarberId, LocalTime time){

        EmployeeBarber  employeeBarber = employeeBarberRepository.findById(employeeBarberId).orElseThrow(() -> new RuntimeException("Barbeiro não encontrado"));

        Time timeHour = new Time();
        timeHour.setTime(time);
        timeHour.setEmployeeBarber(employeeBarber);

        timeRepository.save(timeHour);
    }

    // Método para buscar funcionário pelo ID
    public EmployeeBarber getEmployeeById(Long employeeId) {
        return employeeBarberRepository.findFuncionarioWithoutBarberShop(employeeId);
    }

}

