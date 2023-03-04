package lk.CarRent.service;

import lk.CarRent.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {

    void savePayment(PaymentDTO payment);

    List<PaymentDTO> getAllPayment();
    List<PaymentDTO> dailyIncome();
    List<PaymentDTO> weeklyIncome();
    List<PaymentDTO> monthlyIncome();
    List<PaymentDTO> annualIncome();


}
