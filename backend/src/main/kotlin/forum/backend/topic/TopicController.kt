package forum.backend.topic

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/topics")
class TopicController {
    @Autowired
    val topicRepository: TopicRepository? = null

    @GetMapping("/all")
    fun getAll() = topicRepository!!.findAll()

    @GetMapping("/bycategory")
    fun getTitleByCategory(@RequestParam category: String): List<Topic> {
        val byCategory = if(category=="All") ".*" else category
        return topicRepository!!.findTitleByCategory(byCategory)
    }

    @PostMapping("/create")
    fun createTopic(@RequestBody topic: Topic) = topicRepository!!.save(topic)
}