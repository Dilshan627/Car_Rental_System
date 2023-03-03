package lk.CarRent.service;

import lk.CarRent.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {

    void savePayment(PaymentDTO payment);

    List<PaymentDTO> getAllPayment();
    String dailyIncome();
    String weeklyIncome();
    String annualIncome();
}
