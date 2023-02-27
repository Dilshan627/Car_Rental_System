package lk.CarRent.service.impl;

import lk.CarRent.dto.CarDTO;
import lk.CarRent.entity.Car;
import lk.CarRent.repo.CarRepo;
import lk.CarRent.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional

public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveCar(CarDTO car) {
        if (!carRepo.existsById(car.getRegistrationNO())) {
            carRepo.save(mapper.map(car, Car.class));
        } else {
            throw new RuntimeException(car.getRegistrationNO() + " " + "Car Already Exists..!");
        }
    }

    @Override
    public void updateCar(CarDTO car) {
        if (carRepo.existsById(car.getRegistrationNO())) {
            carRepo.save(mapper.map(car, Car.class));
        } else {
            throw new RuntimeException(car.getRegistrationNO() + " " + "No Such Car..! Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteCar(String id) {
        if (carRepo.existsById(id)) {
            carRepo.deleteById(id);
        } else {
            throw new RuntimeException(id + " " + "No Such Car..! Please Check The Correct Id..!");
        }
    }

    @Override
    public CarDTO searchCar(String id) {
        if (carRepo.existsById(id)) {
            Car car = carRepo.findById(id).get();
            return mapper.map(car, CarDTO.class);
        } else {
            throw new RuntimeException(id + " " + "No Such Car..! Please Check The Id..!");
        }
    }

    @Override
    public List<CarDTO> getAllCar() {
        List<Car> all = carRepo.findAll();
        return mapper.map(all, new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    @Override
    public CarDTO getCar(String brand) {
        Car car = carRepo.getCarDetails(brand);
        return mapper.map(car, CarDTO.class);
    }

    @Override
    public void BookCar(String id) {
        if (carRepo.existsById(id)) {
            carRepo.bookCar(id);
        } else {
            throw new RuntimeException(id + " " + "No Such Car..! Please Check The Correct Id..!");
        }
    }

    @Override
    public String countByCar() {
        return carRepo.countByCar();
    }

    @Override
    public String countByMaintainCar() {
        return carRepo.countByMaintainCar();
    }


}
