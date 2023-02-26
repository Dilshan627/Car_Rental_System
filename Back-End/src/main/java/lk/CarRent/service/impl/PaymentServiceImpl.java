package lk.CarRent.service.impl;

import lk.CarRent.dto.PaymentDTO;
import lk.CarRent.entity.Payment;
import lk.CarRent.repo.PaymentRepo;
import lk.CarRent.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentRepo paymentRepo;
    @Autowired
    ModelMapper mapper;


    @Override
    public void savePayment(PaymentDTO payment) {
        if (!paymentRepo.existsById(payment.getPaymentId())) {
            paymentRepo.save(mapper.map(payment, Payment.class));
        } else {
            throw new RuntimeException(payment.getBookingId() + " " + "Already Exists..!");
        }
    }

    @Override
    public List<PaymentDTO> getAllPayment() {
        List<Payment> all = paymentRepo.findAll();
        return mapper.map(all, new TypeToken<List<PaymentDTO>>() {
        }.getType());
    }
}
