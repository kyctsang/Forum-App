package forum.backend.category

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/category")
class CategoryController {
    @Autowired
    val categoryRepository: CategoryRepository? = null

    @GetMapping("/all")
    fun getAll() = categoryRepository!!.findAll()
}