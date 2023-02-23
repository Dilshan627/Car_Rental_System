package lk.CarRent.repo;

import lk.CarRent.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DriverRepo extends JpaRepository<Driver, Long> {

    @Query(value = "select * from driver where status=false", nativeQuery = true)
    List<Driver> getAvailableDriver();
}
