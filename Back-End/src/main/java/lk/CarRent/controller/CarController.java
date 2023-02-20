package lk.CarRent.controller;

import lk.CarRent.dto.CarDTO;
import lk.CarRent.service.CarService;
import lk.CarRent.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService carService;

    @PostMapping
    public ResponseUtil saveCar(@RequestBody CarDTO car) {
        System.out.println(car);
        carService.saveCar(car);
        return new ResponseUtil("200", "Successfully Registered.", null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchCar(@PathVariable String id) {
        return new ResponseUtil("200", "Ok.", carService.searchCar(id));
    }

    @PutMapping
    public ResponseUtil updateCar(@RequestBody CarDTO car) {
        carService.updateCar(car);
        return new ResponseUtil("200", "Successfully Updated.", null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteCar(@RequestParam String id) {
        carService.deleteCar(id);
        return new ResponseUtil("200", "Successfully Deleted.", null);
    }

    @GetMapping
    public ResponseUtil getAllCar() {
        return new ResponseUtil("200", "Ok", carService.getAllCar());
    }

}
