package lk.CarRent.controller;

import lk.CarRent.dto.CustomerDTO;
import lk.CarRent.service.CustomerService;
import lk.CarRent.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO customer) {
        System.out.println(customer);
        customerService.saveCustomer(customer);
        return new ResponseUtil("200", "Successfully Registered.", null);
    }

}
