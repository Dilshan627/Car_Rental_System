package lk.CarRent.service;

import lk.CarRent.dto.CarDTO;

import java.util.List;

public interface CarService {
    void saveCar(CarDTO car);

    void updateCar(CarDTO car);

    void deleteCar(String id);

    CarDTO searchCar(String id);

    List<CarDTO> getAllCar();

    CarDTO getCar(String brand);

    void BookCar(String id);

    String countByCar ();
}
