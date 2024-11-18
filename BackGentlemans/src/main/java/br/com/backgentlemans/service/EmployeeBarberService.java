package br.com.backgentlemans.service;

import br.com.backgentlemans.entities.Branches;
import br.com.backgentlemans.entities.EmployeeBarber;
import br.com.backgentlemans.entities.Time;
import br.com.backgentlemans.repository.BranchesRepository;
import br.com.backgentlemans.repository.EmployeeBarberRepository;
import br.com.backgentlemans.repository.TimeRepository;
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

