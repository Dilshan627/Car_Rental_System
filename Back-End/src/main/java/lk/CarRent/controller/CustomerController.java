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
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO customer) {
        System.out.println(customer);
        customerService.saveCustomer(customer);
        return new ResponseUtil("200", "Successfully Registered.", null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchCustomer(@PathVariable String id) {
        return new ResponseUtil("200", "Ok.", customerService.searchCustomer(id));
    }

    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO cusDto) {
        customerService.updateCustomer(cusDto);
        return new ResponseUtil("200", "Successfully Updated.", null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteCustomer(@RequestParam String id) {
        customerService.deleteCustomer(id);
        return new ResponseUtil("200", "Successfully Deleted.", null);
    }

    @GetMapping
    public ResponseUtil getAllCustomer() {
        return new ResponseUtil("200", "Ok", customerService.getAllCustomers());
    }

    @GetMapping(path ="/{username}/{password}")
    public ResponseUtil findByPasswordAndUsername(@PathVariable("username") String username, @PathVariable("password") String password){
        return new ResponseUtil("200", "Ok", customerService.findByCustomerUserNameAndCustomerPassword(username,password));
    }

}
