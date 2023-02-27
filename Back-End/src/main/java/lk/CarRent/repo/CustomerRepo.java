package lk.CarRent.repo;

import lk.CarRent.entity.Customer;
import lk.CarRent.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer, Long> {

    Customer findByCustomerUserNameAndCustomerPassword(String userName,String password);

    @Query(value = "SELECT COUNT(*) FROM customer", nativeQuery = true)
    String countById ();
}
