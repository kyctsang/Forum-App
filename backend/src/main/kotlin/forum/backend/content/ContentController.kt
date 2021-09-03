package forum.backend.content

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/contents")
class ContentController {
    @Autowired
    val contentRepository: ContentRepository? = null

    @GetMapping("/all")
    fun getAll() = contentRepository!!.findAll()

    @GetMapping("/bytopic")
    fun getContent(@RequestParam topic: String) = contentRepository!!.findContent(topic)

    @PostMapping("/add")
    fun addComment(@RequestBody content: Content){
        if (content.topic_id == -1) {
            val numberOfRow = contentRepository!!.findNoRowOfTopic()
            content.topic_id = numberOfRow
        }
        contentRepository!!.save(content)
    }
}