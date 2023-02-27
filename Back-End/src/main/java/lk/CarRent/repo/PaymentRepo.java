package lk.CarRent.repo;

import lk.CarRent.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepo extends JpaRepository<Payment, String> {

    @Query(value =  "SELECT SUM(fullPayment) FROM Payment WHERE fullPayment", nativeQuery = true)
    String totalIncome();
}
