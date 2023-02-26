package lk.CarRent.service.impl;

import lk.CarRent.dto.DriverDTO;
import lk.CarRent.entity.Driver;
import lk.CarRent.repo.DriverRepo;
import lk.CarRent.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveDriver(DriverDTO driver) {
        if (!driverRepo.existsById(driver.getId())) {
            driverRepo.save(mapper.map(driver, Driver.class));
        } else {
            throw new RuntimeException(driver.getId() + " " + "Driver Already Exists..!");
        }
    }

    @Override
    public void updateDriver(DriverDTO driver) {
        if (driverRepo.existsById(driver.getId())) {
            driverRepo.save(mapper.map(driver, Driver.class));
        } else {
            throw new RuntimeException(driver.getId() + " " + "No Such Driver..! Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (driverRepo.existsById(Long.valueOf(id))) {
            driverRepo.deleteById(Long.valueOf(id));
        } else {
            throw new RuntimeException(id + " " + "No Such Driver..! Please Check The Correct Id..!");
        }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        if (driverRepo.existsById(Long.valueOf(id))) {
            Driver driver = driverRepo.findById(Long.valueOf(id)).get();
            return mapper.map(driver, DriverDTO.class);
        } else {
            throw new RuntimeException(id + " " + "No Such Driver..! Please Check The Id..!");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        List<Driver> all = driverRepo.findAll();
        return mapper.map(all, new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public List<DriverDTO> getAvailableDriver() {
        List<Driver> availableDriver = driverRepo.getAvailableDriver();
        return mapper.map(availableDriver, new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public DriverDTO findByDriverNameAndDriverPassword(String username, String password) {
        Driver driver = driverRepo.findByDriverNameAndDriverPassword(username, password);
        return mapper.map(driver, DriverDTO.class);
    }
}
