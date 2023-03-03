package lk.CarRent.repo;

import lk.CarRent.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PaymentRepo extends JpaRepository<Payment, String> {

    @Query(value =  "SELECT SUM(fullPayment) as total_income FROM payment WHERE paymentDate = CURDATE()", nativeQuery = true)
    String dailyIncome();

    @Query(value =  "SELECT SUM(fullPayment) as total_income FROM payment WHERE paymentDate>= DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) DAY)", nativeQuery = true)
    String weeklyIncome();

    @Query(value =  "SELECT SUM(fullPayment) as total_income FROM payment WHERE YEAR(paymentDate) = YEAR(CURDATE())", nativeQuery = true)
    String annualIncome();
}
