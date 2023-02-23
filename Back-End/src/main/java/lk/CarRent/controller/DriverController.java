package lk.CarRent.controller;

import lk.CarRent.dto.DriverDTO;
import lk.CarRent.service.DriverService;
import lk.CarRent.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

    @PostMapping
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO driver) {
        System.out.println(driver);
        driverService.saveDriver(driver);
        return new ResponseUtil("200", "Successfully Registered.", null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchDriver(@PathVariable String id) {
        return new ResponseUtil("200", "Ok.", driverService.searchDriver(id));
    }

    @PutMapping
    public ResponseUtil updateDriver(@RequestBody DriverDTO driver) {
        driverService.updateDriver(driver);
        return new ResponseUtil("200", "Successfully Updated.", null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteDriver(@RequestParam String id) {
        driverService.deleteDriver(id);
        return new ResponseUtil("200", "Successfully Deleted.", null);
    }

    @GetMapping
    public ResponseUtil getAllDriver() {
        return new ResponseUtil("200", "Ok", driverService.getAllDrivers());
    }

    @GetMapping("/available")
    public ResponseUtil getAvailableDriver() {
        return new ResponseUtil("200", "Ok", driverService.getAvailableDriver());
    }

}
