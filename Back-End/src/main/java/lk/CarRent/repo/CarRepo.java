package lk.CarRent.repo;

import lk.CarRent.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car, String> {
}
