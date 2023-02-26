package lk.CarRent.repo;

import lk.CarRent.entity.Customer;
import lk.CarRent.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DriverRepo extends JpaRepository<Driver, Long> {

    @Query(value = "select * from driver where status=false", nativeQuery = true)
    List<Driver> getAvailableDriver();

  /*  @Query(value = "UPDATE driver SET driverAddress =:address, driverContact = :contact WHERE Id = :id", nativeQuery = true)
    void updateDriver(@Param("id,address,contact") String id, String address, String contact);*/

    Driver findByDriverNameAndDriverPassword(String name,String password);
}
