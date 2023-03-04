package lk.CarRent.controller;

import lk.CarRent.dto.PaymentDTO;
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
    public ResponseUtil savePayment(@RequestBody PaymentDTO payment) {
        System.out.println(payment);
        paymentService.savePayment(payment);
        return new ResponseUtil("200", "Successfully.", null);
    }

    @GetMapping
    public ResponseUtil getAllPayment() {
        return new ResponseUtil("200", "Ok", paymentService.getAllPayment());
    }

    @GetMapping("/daily")
    public ResponseUtil getAllDailyIncome() {
        return new ResponseUtil("200", "Ok", paymentService.dailyIncome());
    }

    @GetMapping("/weekly")
    public ResponseUtil getAllWeeklyIncome() {
        return new ResponseUtil("200", "Ok", paymentService.weeklyIncome());
    }

    @GetMapping("/monthly")
    public ResponseUtil getAllMonthlyIncome() {
        return new ResponseUtil("200", "Ok", paymentService.monthlyIncome());
    }

    @GetMapping("/annual")
    public ResponseUtil getAllAnnualIncome() {
        return new ResponseUtil("200", "Ok", paymentService.annualIncome());
    }
}
