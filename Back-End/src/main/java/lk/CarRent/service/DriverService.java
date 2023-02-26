package lk.CarRent.service;

import lk.CarRent.dto.CustomerDTO;
import lk.CarRent.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO driver);

    void updateDriver(DriverDTO driver);

    void deleteDriver(String id);

    DriverDTO searchDriver(String id);

    List<DriverDTO> getAllDrivers();

    List<DriverDTO>getAvailableDriver();

    DriverDTO findByDriverNameAndDriverPassword(String username, String password);

}
