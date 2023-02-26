package lk.CarRent.controller;

import lk.CarRent.dto.CustomerDTO;
import lk.CarRent.dto.PaymentDTO;
import lk.CarRent.service.CustomerService;
import lk.CarRent.service.PaymentService;
import lk.CarRent.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("payment")
@CrossOrigin
public class PaymentController {

    @Autowired
    PaymentService paymentService;


    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody PaymentDTO payment) {
        System.out.println(payment);
        paymentService.savePayment(payment);
        return new ResponseUtil("200", "Successfully.", null);
    }

    @GetMapping
    public ResponseUtil getAllCustomer() {
        return new ResponseUtil("200", "Ok", paymentService.getAllPayment());
    }

}
