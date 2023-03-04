package lk.CarRent.repo;

import lk.CarRent.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment, String> {

    @Query(value = "SELECT * FROM payment WHERE paymentDate = CURDATE()", nativeQuery = true)
    List<Payment> dailyIncome();

    @Query(value = "SELECT * FROM payment WHERE paymentDate>= DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) DAY)", nativeQuery = true)
    List<Payment> weeklyIncome();

    @Query(value = "SELECT * FROM payment WHERE YEAR(paymentDate) = YEAR(CURDATE()) AND MONTH(paymentDate) = MONTH(CURDATE());", nativeQuery = true)
    List<Payment> monthlyIncome();

    @Query(value = "SELECT * FROM payment WHERE YEAR(paymentDate) = YEAR(CURDATE())", nativeQuery = true)
    List<Payment> annualIncome();
}
