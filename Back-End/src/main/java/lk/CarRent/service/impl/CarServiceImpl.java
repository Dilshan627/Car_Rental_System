package lk.CarRent.service.impl;

import lk.CarRent.dto.CarDTO;
import lk.CarRent.repo.CarRepo;
import lk.CarRent.service.CarService;
import org.modelmapper.ModelMapper;
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

    }

    @Override
    public void updateCar(CarDTO car) {

    }

    @Override
    public void deleteCar(String id) {

    }

    @Override
    public CarDTO searchCar(String id) {
        return null;
    }

    @Override
    public List<CarDTO> getAllCar() {
        return null;
    }
}
