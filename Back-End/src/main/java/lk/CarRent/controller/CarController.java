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
        return new ResponseUtil("200", "Successfully Add.", null);
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

    @GetMapping(path = "/search/{brand}")
    public ResponseUtil getCar(@PathVariable("brand") String brand) {
        return new ResponseUtil("200", "Successfully", carService.getCar(brand));
    }

    @PutMapping(path = "/booking/{id}")
    public ResponseUtil bookCar(@PathVariable("id") String id) {
        System.out.println(id);
      /*  carService.BookCar(id);*/
        return new ResponseUtil("200", "Successfully Updated.", null);
    }

    @GetMapping("/count")
    public ResponseUtil getCarCount() {
        return new ResponseUtil("200", "Ok", carService.countByCar());
    }

    @GetMapping("/count/maintain")
    public ResponseUtil getMaintainCarCount() {
        return new ResponseUtil("200", "Ok", carService.countByMaintainCar());
    }
}
