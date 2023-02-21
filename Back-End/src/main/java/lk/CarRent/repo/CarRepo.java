package lk.CarRent.repo;

import lk.CarRent.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CarRepo extends JpaRepository<Car, String> {

    @Query(value = "select * from car where carBrand =:brand", nativeQuery = true)
    Car getCarDetails(@Param("brand") String brand);
}
